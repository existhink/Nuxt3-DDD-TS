<script setup lang="ts">
// Services
import { useAuthenticationLoginService } from '../services/authentication-login.service';

/**
 * @description Destructure all the data and methods what we need
 */
const { authenticationLogin_formData, authenticationLogin_formValidations, authenticationLogin_onSubmit } =
  useAuthenticationLoginService();
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-aygwc&psig=AOvVaw1YNHARWIpugn0ZvcXKj9-3&ust=1739518380661000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD_0oyRwIsDFQAAAAAdAAAAABAE"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" @submit.prevent="authenticationLogin_onSubmit()">
        <div>
          <BaseFormGroup
            v-slot="{ classes }"
            class-label="block text-sm font-medium leading-6 text-gray-900"
            is-name-as-label
            label-for="username"
            name="Username"
            :validators="authenticationLogin_formValidations.username"
          >
            <div class="mt-2">
              <input
                id="username"
                v-model="authenticationLogin_formData.username"
                name="username"
                type="text"
                v-bind="{ ...useBindStateForm('John Doe') }"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{ ...classes }"
                v-on="useListenerForm(authenticationLogin_formValidations, 'username')"
              />
            </div>
          </BaseFormGroup>
        </div>

        <div>
          <BaseFormGroup
            v-slot="{ classes }"
            name="Password"
            :validators="authenticationLogin_formValidations.password"
          >
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>

            <div class="mt-2">
              <input
                id="password"
                v-model="authenticationLogin_formData.password"
                :class="{ ...classes }"
                name="password"
                type="password"
                v-bind="{ ...useBindStateForm('*********') }"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                v-on="useListenerForm(authenticationLogin_formValidations, 'password')"
              />
            </div>
          </BaseFormGroup>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div>
</template>
