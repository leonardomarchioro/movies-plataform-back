import { ok } from "assert";
import { CheckUserTokenFeature } from "../../core/features/check-user-token.feature";
import { verify } from 'jsonwebtoken'



export class CheckUserTokenJWTConnector implements CheckUserTokenFeature {

    async perform(token: string): Promise<boolean> {
        ok(process.env.SECRET_KEY)
        const pass = verify(token, process.env.SECRET_KEY);
        return !!pass
    }
}