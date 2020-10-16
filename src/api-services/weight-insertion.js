import Axios from 'axios'

const RESOURCE_NAME = '/weight'

export default {
  insertWeights () {
    return Axios.post(
      RESOURCE_NAME,
      '{"date":"2020-01-01T00:01:23.456789+03:00", "weight":123.0}',
      {
        headers: {'content-type': 'application/json'}
      })
  }
}
