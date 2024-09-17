import { createFileRoute } from "@tanstack/react-router";
import { CalculatorsPage } from "../pages/CalculatorsPage";

export const Route = createFileRoute("/mortgageCalculator")({
  component: CalculatorsPage,
});
