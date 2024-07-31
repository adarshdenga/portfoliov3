import { RandomReveal } from "react-random-reveal";

export default function EntryAnimator() {
  return (
    <div className="entryanimator w-screen h-screen flex items-center justify-center font-dmsans text-6xl bg-black">
      <div className="entryanimatortext">
        <RandomReveal isPlaying duration={2} characters={"Adarsh Denga"} />
      </div>
    </div>
  );
}
