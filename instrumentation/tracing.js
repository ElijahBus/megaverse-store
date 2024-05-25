
import { trace, context } from '@opentelemetry/api';

export default (serviceName) => {

  const tracer = trace.getTracer(serviceName);
  return {
    tracer: tracer,
    startSpan: (name, parentSpan) => {
      const ctx = parentSpan
        ? trace.setSpan(context.active(), parentSpan)
        : undefined;
      return tracer.startSpan(name, undefined, ctx);
    },
  };
};
