"use client";

import { Suspense } from "react";
import JobsContent from "./JobsContent";

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading jobs...</div>}>
      <JobsContent />
    </Suspense>
  );
}
