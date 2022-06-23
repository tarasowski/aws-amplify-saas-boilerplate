<script>
  export let planName;
  export let price;
  import Pricing from "../Buttons/Pricing.svelte";
  import { user } from "../../store.js";
  import { callAPI, stripeCreateSubscription } from "../../graphql/";

  let isLoading = false

  const priceId1 = import.meta.env.VITE_STRIPE_PRICE_ID_1;
  const priceId2 = import.meta.env.VITE_STRIPE_PRICE_ID_2;
  const priceId3 = import.meta.env.VITE_STRIPE_PRICE_ID_3;

  const createSubscription = async () => {
    isLoading = true
    try {
      const res = await callAPI(stripeCreateSubscription, {
        input: {
          organizationId: $user.organizationId,
          priceId: planName === "Personal"
            ? priceId1
            : planName === "Business"
              ? priceId2
              : planName === "Professional"
                ? priceId3
                :priceId1,
          successUrl: "http://localhost:3000/settings",
          cancelUrl: "http://localhost:3000/settings",
        },
      });
      const url = res.data.stripeCreateSubscription;
      window.open(url, "_self");
      isLoading = false
    } catch (e) {
      console.log(e);
      isLoading = false
    }
  };
</script>
<div class="w-full md:w-1/2 lg:w-1/3 px-4">
  <div
    class="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10"
  >
    <span class="text-primary font-semibold text-lg block mb-4">
      {planName}
    </span>
    <h2 class="font-bold text-dark mb-5 text-[42px]">
      ${price}
      <span class="text-base text-body-color font-medium"> / month </span>
    </h2>
    <p class="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
      Perfect for using in a personal website or a client project.
    </p>
    <div class="mb-7">
      <p class="text-base text-body-color leading-loose mb-1">1 User</p>
      <p class="text-base text-body-color leading-loose mb-1">
        All UI components
      </p>
      <p class="text-base text-body-color leading-loose mb-1">
        Lifetime access
      </p>
      <p class="text-base text-body-color leading-loose mb-1">Free updates</p>
      <p class="text-base text-body-color leading-loose mb-1">
        Use on 1 (one) project
      </p>
      <p class="text-base text-body-color leading-loose mb-1">
        3 Months support
      </p>
    </div>
    {#if !isLoading}
    <Pricing label={`Choose ${planName}`} handler={createSubscription} isLoading={false} /> 
    {:else if isLoading}
    <Pricing label={`Choose ${planName}`}
    handler={createSubscription} isLoading={true} />
    {/if}
    <div>
      <span class="absolute right-0 top-7 z-[-1]">
        <svg
          width="77"
          height="172"
          viewBox="0 0 77 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="86"
              y1="0"
              x2="86"
              y2="172"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.09" />
              <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span class="absolute right-4 top-4 z-[-1]">
        <svg
          width="41"
          height="89"
          viewBox="0 0 41 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="38.9138"
            cy="87.4849"
            r="1.42021"
            transform="rotate(180 38.9138 87.4849)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="74.9871"
            r="1.42021"
            transform="rotate(180 38.9138 74.9871)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="62.4892"
            r="1.42021"
            transform="rotate(180 38.9138 62.4892)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="38.3457"
            r="1.42021"
            transform="rotate(180 38.9138 38.3457)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="13.634"
            r="1.42021"
            transform="rotate(180 38.9138 13.634)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="50.2754"
            r="1.42021"
            transform="rotate(180 38.9138 50.2754)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="26.1319"
            r="1.42021"
            transform="rotate(180 38.9138 26.1319)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="1.42021"
            r="1.42021"
            transform="rotate(180 38.9138 1.42021)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="87.4849"
            r="1.42021"
            transform="rotate(180 26.4157 87.4849)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="74.9871"
            r="1.42021"
            transform="rotate(180 26.4157 74.9871)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="62.4892"
            r="1.42021"
            transform="rotate(180 26.4157 62.4892)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="38.3457"
            r="1.42021"
            transform="rotate(180 26.4157 38.3457)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="13.634"
            r="1.42021"
            transform="rotate(180 26.4157 13.634)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="50.2754"
            r="1.42021"
            transform="rotate(180 26.4157 50.2754)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="26.1319"
            r="1.42021"
            transform="rotate(180 26.4157 26.1319)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="1.4202"
            r="1.42021"
            transform="rotate(180 26.4157 1.4202)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="87.4849"
            r="1.42021"
            transform="rotate(180 13.9177 87.4849)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="74.9871"
            r="1.42021"
            transform="rotate(180 13.9177 74.9871)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="62.4892"
            r="1.42021"
            transform="rotate(180 13.9177 62.4892)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="38.3457"
            r="1.42021"
            transform="rotate(180 13.9177 38.3457)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="13.634"
            r="1.42021"
            transform="rotate(180 13.9177 13.634)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="50.2754"
            r="1.42021"
            transform="rotate(180 13.9177 50.2754)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="26.1319"
            r="1.42021"
            transform="rotate(180 13.9177 26.1319)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="1.42019"
            r="1.42021"
            transform="rotate(180 13.9177 1.42019)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="87.4849"
            r="1.42021"
            transform="rotate(180 1.41963 87.4849)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="74.9871"
            r="1.42021"
            transform="rotate(180 1.41963 74.9871)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="62.4892"
            r="1.42021"
            transform="rotate(180 1.41963 62.4892)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="38.3457"
            r="1.42021"
            transform="rotate(180 1.41963 38.3457)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="13.634"
            r="1.42021"
            transform="rotate(180 1.41963 13.634)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="50.2754"
            r="1.42021"
            transform="rotate(180 1.41963 50.2754)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="26.1319"
            r="1.42021"
            transform="rotate(180 1.41963 26.1319)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="1.4202"
            r="1.42021"
            transform="rotate(180 1.41963 1.4202)"
            fill="#3056D3"
          />
        </svg>
      </span>
    </div>
  </div>
</div>
