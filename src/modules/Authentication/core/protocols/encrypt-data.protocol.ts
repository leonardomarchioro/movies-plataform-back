/**
 * Descritption: Encrypt data protocol interface to connect with adapter layer to encrypt data
 *
 * @export
 * @abstract
 * @class EncryptDataProtocol
 */
export abstract class EncryptDataProtocol {
    /**
     * Description: encrypts data and returns the encrypted data
     *
     * @abstract
     * @param {string} data the data to encrypt
     * @return {*}  {Promise<string>} the encrypted data
     * @memberof EncryptDataProtocol
     */
    abstract perform(data: string): Promise<string>
  }
  