import { NodeSDK, tracing } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import {
  ConsoleMetricExporter,
  PeriodicExportingMetricReader,
} from '@opentelemetry/sdk-metrics';
import {
  getNodeAutoInstrumentations,
} from '@opentelemetry/auto-instrumentations-node';

const sdk = new NodeSDK({
  serviceName: 'megaverse',
  traceExporter: new OTLPTraceExporter({ url: 'http://localhost:7281' }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
  }),
  spanProcessors: [
    new tracing.SimpleSpanProcessor(
      new OTLPTraceExporter({ url: 'http://localhost:7281' }),
    ),
  ],

  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
