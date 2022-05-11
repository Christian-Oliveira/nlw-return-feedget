import { useState } from "react";
import { CloseButton } from "../CloseButton";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackType } from "../../utils/consts";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton /> 
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep />
      )}

      <footer>
        Feito com ♥ por{" "}
        <a className="underline underline-offset-2" href="https://www.linkedin.com/in/christian-d-oliveira/">
          Christian Oliveira
        </a>
      </footer>
    </div>
  );
}