import { createFileRoute } from '@tanstack/react-router'
import { AffordabilityCalc } from '../../components/AffordabilityCalc'

export const Route = createFileRoute('/_calculators/affordabilityCalculator')({
  component: AffordabilityCalc,
})
