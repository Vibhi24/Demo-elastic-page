import Contentstack from 'contentstack'

const API_KEY = 'blt2260b25d78f02c35';
const DELIVERY_TOKEN = 'cs58fb72625764c334e0fd165d'
const CONTENT_TYPE = 'global_header'

const Stack = Contentstack.Stack({ "api_key": API_KEY, "delivery_token": DELIVERY_TOKEN, "environment": "development" });

export async function getHeaderFooter(){
            const header =  await Stack.ContentType("global_header").Query()
            .includeReference()
            .toJSON()
            .find()
            .then(function success(result) {
                    return result;
            }, function error(error) {
                    
            });

            return {header :header[0][0] || null}
}

