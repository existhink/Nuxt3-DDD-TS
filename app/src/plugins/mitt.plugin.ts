// Interfaces
import type { Emitter } from 'mitt';

// Mitt
import mitt from 'mitt';

/**
 * @description Injected variables
 */
const eventBus: Emitter<IBusEvent> = mitt<IBusEvent>();

export default defineNuxtPlugin(() => {
  return {
    provide: {
      bus: eventBus,
    },
  };
});
