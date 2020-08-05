<template lang="pug">
.content-wrapper
  section
    .container
      .auth
        .auth__banner
          span.ui-title-2 Hello Banner
        .auth__form
          span.ui-title-2 SignUp
          form(@submit.prevent="submit")
            .form-item(:class="{ 'error-input': $v.email.$error }")
              input(
                type="email", 
                placeholder="Email", 
                v-model="email" 
                :class="{ 'error': $v.email.$error }" 
                @change="$v.email.$touch()"
              )
              .error(v-if="!$v.email.required") Field is required
              .error(v-if="!$v.email.email") Email is not correct

            .form-item(:class="{ 'error-input': $v.password.$error }")
              input(
                type="password", 
                placeholder="Password", 
                v-model="password"
                :class="{ 'error': $v.password.$error }" 
                @change="$v.password.$touch()"
              )
              .error(v-if="!$v.password.required") Password is required.
              .error(v-if="!$v.password.minLength")
                | Password must have at least {{ $v.password.$params.minLength.min }} letters.

            .form-item(:class="{ 'error-input': $v.repeatPassword.$error }")
              input(
                type="password",
                placeholder="Repeat Password",
                v-model="repeatPassword"
                :class="{ 'error': $v.repeatPassword.$error }" 
                @change="$v.repeatPassword.$touch()"
              )
              .error(v-if="!$v.repeatPassword.sameAsPassword") Passwords must be identical.

            .button-list
              button.button-primary(type="submit" :disabled="submitStatus === 'PENDING'") SignUp

            .button-list.button-list--info
              p.typo__p(v-if="submitStatus === 'OK'") Thanks for your submission!
              p.typo__p(v-if="submitStatus === 'ERROR'") Please fill the form correctly.
              p.typo__p(v-if="submitStatus === 'PENDING'") Sending...

            .button-list.button-list--info
              span Already have an account?
                router-link(to="/login")  Sign In

</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      submitStatus: null,
    };
  },
  validations: {
    email: {
      required,
      // asd@asd.com
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        const user = {
          email: this.email,
          password: this.password,
        };
        console.log(user);
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.auth {
  display: flex;
}

.auth__banner, .auth__form {
  width: 50%;
}

input
  &.error
    border 1px solid tomato

.form-item
  .error
    display none
  &.error-input
    .error
      display block
      color tomato
      padding-left: 10px;
      font-size: 14px;
      margin-bottom 8px

.button-list
  text-align right
  margin-bottom 20px
  &.buttons-list--info
    text-align center
    &:last-child
      margin-bottom 0

a
  color #444ce0
</style>
