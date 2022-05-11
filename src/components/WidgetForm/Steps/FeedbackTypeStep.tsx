import { FeedbackType, feedbackTypes } from "../../../utils/consts";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, content]) => {
        return (
          <button 
          key={key}
          type="button"
          onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={content.image.source} alt={content.image.alt} />
            <span>{content.title}</span>
          </button>
        )
      })}
    </div>
  );
}