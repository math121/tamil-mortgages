import { createFileRoute } from '@tanstack/react-router'
import { StampDutyCalculator } from '../../components/StampDutyCalculator'

export const Route = createFileRoute('/_calculators/stampDutyCalculator')({
  component: StampDutyCalculator,
})
