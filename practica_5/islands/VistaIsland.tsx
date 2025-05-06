import { useSignal } from "@preact/signals";
import { Data } from "../types.ts";

export default function VistaIsland({ posts }: Data) {
  const changeView = useSignal<boolean>(false);

  return (
    <div>
      <div className="button-container">
        <button
          type="button"
          onClick={() => (changeView.value = !changeView.value)}
        >
          {changeView.value ? "Cuadrícula" : "Lista"}
        </button>
      </div>

      <div className={changeView.value ? "CuadriculaCSS" : "ListaCSS"}>
        {posts.map((s) => (
          <div
            key={s._id}
            className={`post-item ${changeView.value ? "grid-item" : ""}`}
          >
            {changeView.value && (
              <img src={s.cover} alt={s.title} className="small-image" />
            )}
            <div className="post-content">
              <strong>{s.title}</strong>
              <p>
                <span>{s.author}</span>
                <span>Likes: {s.likes}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
