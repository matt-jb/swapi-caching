import { Injectable } from "@nestjs/common";
import { Counter, register } from "prom-client";

@Injectable()
export class MetricsService {
  private requestCounter: Counter;

  constructor() {
    register.clear();
    this.requestCounter = new Counter({
      name: "nestjs_health_requests_total",
      help: "Total number of requests to the NestJS health check endpoint",
    });
    register.setDefaultLabels({
      app: "nestjs-prometheus",
    });
    register.registerMetric(this.requestCounter);
  }

  incrementHealthRequestCounter() {
    this.requestCounter.inc();
  }
}
