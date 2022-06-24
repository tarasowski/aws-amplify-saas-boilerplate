<script>
  import { XIcon } from "@rgossiaux/svelte-heroicons/outline";
  import { showUpgradeModal } from "../../store.js";
  import PriceOption from "../Modals/PriceOption.svelte";

</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<div
  class="relative z-10"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
    >
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        class="relative bg-white rounded-lg text-left overflow-auto shadow-xl transform transition-all w-11/12 max-h-[90vh]"
      >
        <div class="flex justify-end py-2 pr-4">
          <XIcon on:click={() => $showUpgradeModal = false} width={32}
          class="text-gray-400 cursor-pointer" />
        </div>
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <!-- ====== Pricing Section Start -->
              <section class="bg-white relative z-20 overflow-hidden">
                <div class="container">
                  <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4">
                      <div
                        class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]"
                      >
                        <span
                          class="font-semibold text-lg text-primary mb-2 block"
                        >
                          Pricing Table
                        </span>
                        <h2
                          class="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4"
                        >
                          Our Pricing Plan
                        </h2>
                        <p class="text-base text-body-color">
                          There are many variations of passages of Lorem Ipsum
                          available but the majority have suffered alteration in
                          some form.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap justify-center -mx-4">
                    <PriceOption 
                    planName="Personal" price={19} />
                    <PriceOption planName="Business" price={39} priceId={2}/>
                    <PriceOption planName="Enterprise" price={79} priceId={3}/>
                  </div>
                </div>
              </section>
              <!-- ====== Pricing Section End -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
