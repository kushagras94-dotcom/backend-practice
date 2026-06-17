import dns from "dns";

dns.resolveSrv(
  "_mongodb._tcp.yt.tqleu1r.mongodb.net",
  (err, addresses) => {
    console.log("ERR =", err);
    console.log("ADDR =", addresses);
  }
);