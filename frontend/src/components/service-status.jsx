import PropTypes from 'prop-types';

const statusContent = {
  loading: {
    label: 'Đang kết nối',
    detail: 'Kiểm tra dịch vụ Express…',
    dotClass: 'bg-amber-500 motion-safe:animate-pulse',
  },
  success: {
    label: 'Sẵn sàng',
    detail: 'Frontend và API đã kết nối.',
    dotClass: 'bg-emerald-600',
  },
  error: {
    label: 'Chưa kết nối',
    detail: 'Hãy khởi động backend tại cổng 3000.',
    dotClass: 'bg-red-700',
  },
};

export function ServiceStatus({ status, version, onRetry }) {
  const content = statusContent[status];

  return (
    <section aria-live="polite" aria-label="Trạng thái hệ thống" className="status-panel">
      <div className="flex items-start gap-3">
        <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${content.dotClass}`} />
        <div>
          <p className="text-sm font-semibold text-ink">{content.label}</p>
          <p className="mt-1 text-sm leading-6 text-ink-muted">{content.detail}</p>
          {version && <p className="mt-2 font-mono text-xs text-ink-faint">API v{version}</p>}
        </div>
      </div>
      {status === 'error' && (
        <button type="button" className="retry-button" onClick={onRetry}>
          Thử lại
        </button>
      )}
    </section>
  );
}

ServiceStatus.propTypes = {
  status: PropTypes.oneOf(['loading', 'success', 'error']).isRequired,
  version: PropTypes.string,
  onRetry: PropTypes.func.isRequired,
};
