const formatDataSize = (byte: number, points: number): string => {
  const KB = 1024
  const MB = 1024 ** 2
  const GB = 1024 ** 3
  if (byte >= 0 && byte < KB) return `${byte} B`
  if (KB <= byte && byte < MB) return `${(byte / KB).toFixed(points)} KB`
  if (MB <= byte && byte < GB) return `${(byte / KB).toFixed(points)} MB`
  return `${(byte / GB).toFixed(points)} GB`
}

export default formatDataSize
