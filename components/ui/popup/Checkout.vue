<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();

// Props
const props = defineProps({
  show: Boolean,
  totalSum: String,
  productName: String,
  currency: Object,
});

// Emits
const emit = defineEmits(["close", "to-sign-up"]);

// Computed
const areAllFiledsFilled = computed(() => {
  if (user.email !== "" && user.password !== "") {
    return true;
  } else {
    return false;
  }
});

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Variables
let user = "";
const loader = ref(false);

const order = reactive({
  userId: "",
  userEmail: "",
  userFullName: "",
  products: "",
  order: {
    description: "",
    successUrl: runtimeConfig.public.domain,
    declineUrl: runtimeConfig.public.domain,
    customer: {
      accountId: "",
      email: "",
    },
    amount: {
      value: "",
      currency: "",
    },
  },
});

// Functions
function calcCurrencyRate(price) {
  return (
    parseFloat(price.replace(/[\s,%]/g, "")) * parseFloat(props.currency.rate)
  ).toFixed(2);
}

async function checkout() {
  loader.value = true;

  const { data: users } = await useFetch(
    runtimeConfig.public.apiBase + "/users/" + localStorage.userId
  );
  user = users.value[0];

  setTimeout(() => {
    loader.value = false;
  }, "1000");

  order.userId = user.id;
  order.userEmail = user.email;
  order.userFullName = user.name + " " + user.surname;
  order.cart = props.productName;
  order.quantity = "1";
  order.total = props.totalSum;
  order.order.description = `Order by user #${user.id} (${user.email})`;
  order.order.customer.accountId = user.id;
  order.order.customer.email = user.email;
  order.order.amount.value = props.productName;
  order.order.amount.currency = props.currency.code;

  $fetch("/orders", {
    headers: basicAuth,
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: JSON.stringify(order),
  }).then(function (response) {
    // user_auth = 0 - success
    // user_auth = 1 - error
    if (response.code === 1) {
      // error
      popupStore.popupTransactionFailed = true;
    } else if (response.code === 0) {
      // redirect
      window.location.href = response.payload.object.payUrl;
    }
  });
}
</script>

<template>
  <div
    v-if="show"
    class="modal__overlay"
  >
    <div class="modal">
      <div class="modal__form">
        <div class="cart__payment">
          <h3 class="cart__payment-title">{{ $t("popupCheckout.title") }}</h3>

          <div class="cart__payment-total">
            <p class="cart__payment-total-text">
              {{ $t("popupCheckout.total") }}
            </p>
            <p class="cart__payment-total-sum">
              {{ calcCurrencyRate(props.totalSum) }}
              {{ props.currency.code }}
            </p>
          </div>
          <UiButtonMain
            class="cart__payment-button"
            :title="$t('popupCheckout.button')"
            theme="primary"
            width="100%"
            height="56px"
            padding="0"
            :loader="loader"
            loader-path="/img/static/loader.gif"
            @click="checkout()"
          />
        </div>
      </div>
    </div>

    <Icon
      class="modal__close-button"
      @click="emit('close')"
      name="PopupClose"
      size="24"
    />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  width: 510px;
  height: 220px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 5%;

  &__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: rgba(58, 58, 68, 0.4);
    backdrop-filter: blur(6px);
    z-index: 5;
  }

  &__close-button {
    margin: 6% 0 0 -40px;
    cursor: pointer;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.cart {
  &__payment {
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 135%;
      color: #3a3a44;
      margin-bottom: 10px;
    }

    &-input {
      width: 100%;
      margin-bottom: 10px;
    }

    &-inputs {
      display: flex;
      gap: 10px;
    }

    &-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 24px;

      &-text {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #3a3a44;
      }

      &-sum {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #dd6738;
      }
    }
  }
}

@media (max-width: 425px) {
  .modal {
    width: 90%;

    &__overlay {
      left: -20px;
    }

    &__close-button {
      margin: 9% 0 0 -40px;
    }
  }
}
</style>
