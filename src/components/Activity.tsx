import { useLanyard } from "react-use-lanyard";

export default function Activity() {
  const lanyard = useLanyard({
    userId: "438357851438579713",
  });

  console.log(JSON.stringify(lanyard, null, 4));

  return <p></p>;
}
