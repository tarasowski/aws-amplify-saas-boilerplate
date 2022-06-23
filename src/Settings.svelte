<script>
  import { showUpgradeModal } from "./store.js"
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
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
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
                      <p class="text-gray-500">Free</p>
                    </div>
                  <button 
                   on:click|preventDefault={() => $showUpgradeModal = true}
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
                        >Total Members</label
                      >
                      <p class="text-gray-500">0</p>
                    </div>
                  </div>
              </fieldset>
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
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- /End replace -->
</div>
