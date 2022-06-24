<script>
  import { showUpgradeModal, user } from "./store.js"
  import { onMount } from "svelte"
  import { callAPI } from "./graphql/"
  import { createSettings, updateSettings, stripeManageSubscription } from "./graphql/mutations.js"
  import { getSettings } from "./graphql/queries.js"
  import Button from "./components/Buttons/Button.svelte"

  const successUrl = import.meta.env.VITE_STRIPE_SUCCESS_URL

  const head = xs => xs[0]
  let isLoading = false
  let isLoadingManage = false

  const getPriceIdName = priceId => { 
    try {
    return import.meta.env.VITE_STRIPE_PRICE_ID_1 === priceId
      ? "Personal"
      : import.meta.env.VITE_STRIPE_PRICE_ID_2 === priceId
        ? "Business"
        : import.meta.env.VITE_STRIPE_PRICE_ID_3 === priceId
          ? "Professional"
          : "Free"
    } catch(e) {
      return "Free"
    }
  }

  onMount(async () => {
    try {
    const res = await callAPI(getSettings, {organizationId: $user.organizationId})
    const data = res.data.getSettings
      if (data) {
    $user = {...data}
      }
    } catch(e) {
      console.log(e)
    }

  })

  const handleSave = async () => {
    isLoading = true
    try {
      await callAPI(updateSettings, {input: {
        organizationId: $user.organizationId,
        firstName:  $user.firstName,
        lastName: $user.lastName,
      }})
      isLoading = false
    } catch(e) {
      console.log(e)
      isLoading = false
    }
  }

  const handleChangePlan = async () => {
    isLoadingManage = true
    try {
      if ($user.subscriptionStatus === null) {
        $showUpgradeModal = true
      } else {
        const data = await callAPI(stripeManageSubscription, {input: {
          organizationId: $user.organizationId,
          stripeCustomerId: $user.stripeCustomerId,
          returnUrl: successUrl 
        }})
        const url = data.data.stripeManageSubscription
        console.log(url)
        window.open(url, "_self")
      }
    isLoadingManage = false
    } catch(e) {
      console.log(e)
    isLoadingManage = false
    }
  }


</script>
<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    bind:value={$user.firstName}
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                  >
                  <input
                    type="text"
                    name="last-name"
                    bind:value={$user.lastName}
                    id="last-name"
                    autocomplete="family-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    value="{$user.email}"
                    disabled
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
                  />
                </div>

                    <!--
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Country</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Street address</label
                  >
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                    >City</label
                  >
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autocomplete="address-level2"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="region"
                    class="block text-sm font-medium text-gray-700"
                    >State / Province</label
                  >
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="postal-code"
                    class="block text-sm font-medium text-gray-700"
                    >ZIP / Postal code</label
                  >
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                    -->
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Button bind:isLoading handler={handleSave} label={"Save"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200"></div>
    </div>
  </div>

  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Your plan details
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Upgrade to a paid plan and enjoy all our features.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <fieldset>
                <legend class="sr-only">Plan details</legend>
                <div
                  class="text-base font-medium text-gray-900"
                  aria-hidden="true"
                >
                  Plan details
                </div>
                <div class="mt-4 space-y-4">
                  <div class="flex justify-between">
                    <div class="text-sm">
                      <label for="comments" class="font-medium text-gray-700">
                        Current plan</label>
                      <p class="text-gray-500">
                      {$user.priceId ? getPriceIdName($user.priceId) : "Free"}
                      </p>
                    </div>
                  <button 
                    disabled={isLoadingManage}
                   on:click|preventDefault={handleChangePlan}
                    class:cursor-wait={isLoadingManage}
                    class="text-blue-500 text-sm">Change plan</button>
                  </div>
              </fieldset>
              <div class="border-t border-gray-200"></div>
              <fieldset>
                <div class="mt-4 space-y-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5"></div>
                    <div class="text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >Monthly Price</label
                      >
                      <p class="text-gray-500">
                      ${$user.amountTotal ? String($user.amountTotal).slice(0, 2) : 0}
                      / month
                      </p>
                    </div>
                  </div>
              </fieldset>
              <!--
              <div class="border-t border-gray-200"></div>
              <fieldset>
                <div class="mt-4 space-y-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5"></div>
                    <div class="text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >Total Boards</label
                      >
                      <p class="text-gray-500">0</p>
                    </div>
                  </div>
              </fieldset>
              -->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- /End replace -->
</div>
