const config = {
  adminIds: process.env.ADMIN_IDS.split(',').map((id: string): number => Number(id))
}

export { config }