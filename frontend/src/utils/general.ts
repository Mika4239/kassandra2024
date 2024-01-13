export const getTBAData = async <T>(url: string): Promise<T> => {
    const resp = await fetch(url, {
      headers: {
        "X-TBA-Auth-Key": import.meta.env.VITE_TBA_AUTH_KEY,
      },
    });
    return resp.json();
  };