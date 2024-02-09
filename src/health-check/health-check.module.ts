import { Module } from "@nestjs/common";
import { HealthCheckController } from "./health-check.controller";
import { MetricsService } from "../metrics/metrics.service";

@Module({
  controllers: [HealthCheckController],
  providers: [MetricsService],
})
export class HealthCheckModule {}
