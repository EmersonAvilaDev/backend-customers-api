import fastify, {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { request } from "http";
import { CreateCustomerController } from "./controllers/CreateCustomer.controller";
import { ListCustomersController } from "./controllers/ListCustomers.controller";
import { DeleteCustomerController } from "./controllers/DeleteCustomer.controller";

const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {

        return new CreateCustomerController().handle(request, reply);
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(request, reply);
  })
    
    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
  })
};

export default routes;