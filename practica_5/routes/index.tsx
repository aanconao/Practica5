import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import VistaIsland from "../islands/VistaIsland.tsx";
import { ApiResponese } from "../types.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, ApiResponese>) => {
    const { data } = await Axios.get(
      "https://back-p5-y0e1.onrender.com/api/posts/",
    );
    return ctx.render(data);
  },
};

const Page = (props: PageProps<ApiResponese>) => {
  return (
    <div>
      <VistaIsland {...props.data.data} />
    </div>
  );
};
export default Page;
