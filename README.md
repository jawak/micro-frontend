# Install

Buat network docker dulu
```shell
docker network create jawak-network
```

Run container
```shell
docker-compose up -d
```

Tambah DNS Local (/etc/hosts)
- Mac [link](https://macpoin.com/122042/cara-edit-file-hosts-di-mac-dan-apa-manfaatnya/)
- Windows [link](https://bolosaholic.com/edit-file-hosts/)
- Linux [link](https://bintalahe.blogspot.com/2019/03/contoh-cara-memodifikasi-dan-mengelola.html)
```shell
127.0.0.1 bvt.test
```