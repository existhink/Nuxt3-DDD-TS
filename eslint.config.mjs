// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'constructor-super': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-constant-binary-expression': 'error',
      'no-extra-boolean-cast': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-undef': 'off',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-useless-catch': 'error',
      'no-use-before-define': 'error',
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/html-self-closing': ['off'],
      'vue/multi-word-component-names': ['off'],
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
    },
  },
);
