import { useState, useEffect } from "react";
import { randUser } from "@ngneat/falso";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestion = randUser({ length: 5 });
    setSuggestions(suggestion);
  }, []);
  return (
    <div className="mt-6 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-semibold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-medium">See All</button>
      </div>
      {
          suggestions.map(profile=>(
            <div key={profile.id} className="flex items-center justify-between mt-3">
                <img src={profile.img} alt=""
                className="w-10 h-10 rounded-full border p-[2px]"/>
                
                <div className="flex-1 ml-4">
                    <h2 className="font-semibold text-sm">{profile.firstName}</h2>
                    <h3 className="text-xs text-gray-400">Followed by {profile.lastName}</h3>
                </div>

                <button className="text-blue-400 font-bold text-xs">
                    Follow
                </button>

            </div>
          ))
      }
    </div>
  );
}

export default Suggestions;
