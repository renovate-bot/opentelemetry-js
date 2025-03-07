/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AggregationTemporality } from './AggregationTemporality';
import { InstrumentType } from './MetricData';
import { AggregationOption, AggregationType } from '../view/AggregationOption';

/**
 * Aggregation selector based on metric instrument types.
 */
export type AggregationSelector = (
  instrumentType: InstrumentType
) => AggregationOption;

/**
 * Aggregation temporality selector based on metric instrument types.
 */
export type AggregationTemporalitySelector = (
  instrumentType: InstrumentType
) => AggregationTemporality;

export const DEFAULT_AGGREGATION_SELECTOR: AggregationSelector =
  _instrumentType => {
    return {
      type: AggregationType.DEFAULT,
    };
  };

export const DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR: AggregationTemporalitySelector =
  _instrumentType => AggregationTemporality.CUMULATIVE;
