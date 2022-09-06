
let endpoint = process.env.VUE_APP_ENDPOINT;
let options = {
  mode: "cors",
  headers: {},
};

export default class API {
  constructor() {
    this.endpoint = endpoint;
  }



  fetchEndpoint(data, route, opt) {
    return async (resolve, reject) => {
      try {
        if (!route) {
          route = "";
        }
        if (!opt) {
          opt = { method: "GET" };
        }

        if (Object.keys(data).length > 0) {
          data = JSON.stringify(data);
        } else {
          data = undefined;
        }

        let req = this.setOptions({ body: data }, options);
        req = this.setOptions(req, opt);

        if (req.method === "POST") {
          req.headers["Content-Type"] = "application/json";
        }
        if (opt) {
          req = this.setOptions(req, opt);
        }

        let res = await fetch(this.endpoint + route, req);
        let body = await res.text();

        if (body === "") {
          body = undefined;
        }
        if (this.isJson(body)) {
          body = JSON.parse(body);
        }

        if (!res.ok) {
          throw body;
        }

        resolve(body);
      } catch (err) {
        console.log(err);
       
        reject(err);
      }
    };
  }



}
