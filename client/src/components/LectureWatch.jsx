import React from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { useGetSingleLectureQuery } from "@/features/api/courseApi";

const LectureWatch = () => {
  const { courseId, lectureId } = useParams();

  const { data, isLoading, isError } = useGetSingleLectureQuery({
    courseId,
    lectureId,
  });

  if (isLoading) return <p>Loading lecture...</p>;
  if (isError) return <p>Failed to load lecture</p>;

  const { lectureTitle, videoUrl } = data?.lecture;

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">{lectureTitle}</h1>
      <div className="aspect-video">
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
      </div>
    </div>
  );
};

export default LectureWatch;
