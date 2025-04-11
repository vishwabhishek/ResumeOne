import { FaCloudUploadAlt, FaCloudDownloadAlt, FaInfoCircle } from "react-icons/fa";
import React, { useContext, useState } from "react";
import { ResumeContext } from "../../pages/builder";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [showTooltip, setShowTooltip] = useState(false);

  // load backup resume data
  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const resumeData = JSON.parse(event.target.result);
      setResumeData(resumeData);
    };
    reader.readAsText(file);
  };

  // download resume data
  const handleDownload = (data, filename, event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="relative bg-zinc-800/70 backdrop-blur-sm rounded p-3 mb-4 border border-white/10">
      <div className="absolute -top-3 left-4 bg-zinc-800 px-2 py-1 rounded text-white text-sm font-medium">
        Resume Data Management
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex-1 w-full">
          <div className="relative group">
            <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-white/10 border-dashed rounded cursor-pointer bg-zinc-800/70 hover:bg-zinc-700/70 transition-all">
              <div className="flex flex-col items-center justify-center pt-3 pb-4">
                <FaCloudUploadAlt className="w-8 h-8 mb-2 text-white" />
                <p className="mb-1 text-sm text-white">
                  <span className="font-semibold">Click to load resume</span>
                </p>
                <p className="text-xs text-slate-300">JSON files only</p>
              </div>
              <input
                aria-label="Load Data"
                type="file"
                className="hidden"
                onChange={handleLoad}
                accept=".json"
              />
            </label>
          </div>
        </div>

        <div className="flex-1 w-full">
          <button
            aria-label="Save Data"
            className="flex flex-col items-center justify-center w-full h-24 border-2 border-white/10 rounded bg-zinc-800/70 hover:bg-zinc-700/70 transition-all"
            onClick={(event) =>
              handleDownload(
                resumeData,
                resumeData.name + "_resume.json",
                event
              )
            }
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <FaCloudDownloadAlt className="w-8 h-8 mb-2 text-white" />
            <p className="mb-1 text-sm text-white">
              <span className="font-semibold">Save resume data</span>
            </p>
            <p className="text-xs text-slate-300">Download as JSON</p>
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2">
        <FaInfoCircle className="text-white mt-1 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          Save your resume data to continue editing later. Load previously saved resume data to restore your progress.
        </p>
      </div>
    </div>
  );
};

export default LoadUnload;
