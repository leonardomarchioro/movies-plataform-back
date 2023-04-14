import { EncryptedDataModel } from '../models/encrypted-data.model'

/**
 * Description: A contract to encrypt data
 *
 * @export
 * @abstract
 * @class EncryptDataFeature
 */
export abstract class EncryptDataFeature {
  /**
   * Description: encrypt a string data
   *
   * @abstract
   * @param {string} data to encrypt
   * @return {*}  {Promise<EncryptedDataModel>}
   * @memberof EncryptDataFeature
   */
  abstract perform(data: string): Promise<EncryptedDataModel>
}
