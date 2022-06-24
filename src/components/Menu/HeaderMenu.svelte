<script>
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Transition,
  } from "@rgossiaux/svelte-headlessui";
  import { logout } from "../../auth.js";

  const handleLogout = () => logout();
</script>

<Menu>
  <MenuButton>
    <slot></slot>
  </MenuButton>
  <Transition
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    <MenuItems>
      <div
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        <!--
        <MenuItem let:active>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            >Your Profile</a
          >
        </MenuItem>
      -->
        <MenuItem let:active>
          <a
            href="/settings"
            class="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
            >Settings</a
          >
        </MenuItem>
        <MenuItem disabled>
          <a
            on:click="{handleLogout}"
            href="/login"
            class="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-2"
            >Sign out</a
          >
        </MenuItem>
      </div>
    </MenuItems>
  </Transition>
</Menu>
