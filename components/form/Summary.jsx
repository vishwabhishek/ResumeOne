import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import AISuggestionButton from '../ai/AISuggestionButton';

const Summary = () => {
  const { resumeData, handleChange } = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <div className="flex justify-between items-center">
        <h2 className="input-title">Summary</h2>
        <AISuggestionButton 
          section="summary" 
          content={resumeData.summary} 
        />
      </div>
      <div className="grid-4">
        <textarea
          placeholder="Summary"
          name="summary"
          className="w-full other-input h-40"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default Summary;
