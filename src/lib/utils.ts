export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getStatusColor(status: string): string {
  const colors = {
    upcoming: 'bg-yellow-900/30 text-yellow-300',
    active: 'bg-green-900/30 text-green-300',
    completed: 'bg-slate-700/30 text-slate-300',
  }
  return colors[status] || colors.upcoming
}
