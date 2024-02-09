import { Controller, Get } from "@nestjs/common";
import { MetricsService } from "../metrics/metrics.service";

@Controller("health")
export class HealthCheckController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  getHealthCheck() {
    this.metricsService.incrementHealthRequestCounter();
    return { status: "OK" };
  }
}
