import type { Context } from "$naxtjs/types/args.ts";
import { renderToString } from "preact-render-to-string";
import { LiveReload } from "$naxtjs/helper/live/mod.tsx";

export default function Profile(context: Context) {
  return context.html(
    renderToString(
      <>
        <h1>My name is {context.req.param("name")}</h1>
        <LiveReload />
      </>
    )
  );
}