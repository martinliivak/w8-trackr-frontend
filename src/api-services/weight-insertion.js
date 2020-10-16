import Axios from 'axios'

const RESOURCE_NAME = '/weight'

export default {
  insertWeights () {
    return Axios.post(
      RESOURCE_NAME,
      '{"date":"", "weight":123.0}',
      {
        headers: {'content-type': 'application/json'}
      })
  }
}
