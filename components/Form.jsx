import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        Create & Share amazing prompts with the world and let your imagination
        run wild with any AI-Powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex-col cap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700 ">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your Prompt"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700 ">
            Tag
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#TAG"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-grey-500 text-sm">
            {" "}
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
