import { motion } from 'framer-motion';

interface GoogleDriveVideoProps {
  driveUrl: string;
  title: string;
  className?: string;
}

// Extract file ID from various Google Drive URL formats
function extractFileId(url: string): string | null {
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=drive_link
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export function GoogleDriveVideo({ 
  driveUrl, 
  title,
  className = '' 
}: GoogleDriveVideoProps) {
  const fileId = extractFileId(driveUrl);
  
  if (!fileId) {
    return (
      <div className={`aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center ${className}`}>
        <p className="text-slate-500">Invalid video URL</p>
      </div>
    );
  }

  // Google Drive embed URL format
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl overflow-hidden shadow-lg border border-slate-200 ${className}`}
    >
      <div className="aspect-video bg-slate-900">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="bg-white px-4 py-3 border-t border-slate-100">
        <p className="text-sm font-medium text-slate-700">{title}</p>
      </div>
    </motion.div>
  );
}
