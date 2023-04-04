const provs = [
  {
    name: 'Maluku',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Coat_of_arms_of_Maluku.svg/800px-Coat_of_arms_of_Maluku.svg.png',
    description:
      'Maluku adalah sebuah provinsi yang meliputi bagian selatan Kepulauan Maluku, Indonesia. Provinsi ini berbatasan dengan Laut Seram di Utara, Samudra Hindia dan Laut Arafura di Selatan, Papua di Timur, dan Sulawesi di Barat. Ibu kota dan kota terbesarnya ialah kota Ambon. Provinsi Maluku berada di urutan ke-28 provinsi menurut jumlah penduduk di Indonesia, di mana pada tahun 2020, populasi provinsi Maluku berjumlah 1.848.923 jiwa.',
  },
  {
    name: 'Aceh ',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Coat_of_arms_of_Aceh.svg/1024px-Coat_of_arms_of_Aceh.svg.png',
    description:
      'Aceh adalah sebuah provinsi di Indonesia yang ibu kotanya berada di Banda Aceh. Aceh merupakan salah satu provinsi di Indonesia yang diberi status sebagai daerah istimewa dan juga diberi kewenangan otonomi khusus. Aceh terletak di ujung utara pulau Sumatra dan merupakan provinsi paling barat di Indonesia. Menurut hasil sensus Badan Pusat Statistik tahun 2021, jumlah penduduk provinsi ini sekitar 5.333.733 jiwa. Letaknya dekat dengan Kepulauan Andaman dan Nikobar di India dan terpisahkan oleh Laut Andaman. Aceh berbatasan dengan Teluk Benggala dan Laut Andaman di sebelah utara, Samudra Hindia di sebelah barat, Selat Malaka di sebelah timur, dan Sumatra Utara di sebelah tenggara dan selatan.',
  },
  {
    name: 'Sumatera Utara',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Coat_of_arms_of_North_Sumatra.svg/800px-Coat_of_arms_of_North_Sumatra.svg.png',
    description:
      'Sumatera Utara adalah sebuah provinsi di Indonesia yang terletak di bagian utara Pulau Sumatra. Provinsi ini beribu kota di Kota Medan, dengan luas wilayah 72.981,23 km2. Sumatra Utara merupakan provinsi dengan jumlah penduduk terbesar keempat di Indonesia, setelah provinsi Jawa Barat, Jawa Timur, dan Jawa Tengah, dan terbanyak di pulau Sumatra. Pada 30 Juni 2022 penduduk Sumatra Utara berjumlah 15.305.230 jiwa, dengan kepadatan penduduk 210 jiwa/km2.',
  },
  {
    name: 'Sumatera Selatan',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Coat_of_arms_of_South_Sumatra.svg/800px-Coat_of_arms_of_South_Sumatra.svg.png',
    description:
      'Sumatra Selatan adalah provinsi di Indonesia yang terletak di bagian Selatan pulau Sumatra. Ibu kota Sumatra Selatan berada di kota Palembang, dan pada tahun 2021 penduduk provinsi ini berjumlah 8.550.849 jiwa. Secara geografis, Sumatra Selatan berbatasan dengan provinsi Jambi di utara, provinsi Kepulauan Bangka-Belitung di timur, provinsi Lampung di selatan dan Provinsi Bengkulu di barat. Provinsi ini kaya akan sumber daya alam, seperti minyak bumi, gas alam dan batu bara. Selain itu, ibu kota provinsi Sumatra Selatan, Palembang, telah terkenal sejak dahulu karena menjadi pusat Kedatuan Sriwijaya.',
  },
  {
    name: 'Sumatera Barat',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Coat_of_arms_of_West_Sumatra.svg/800px-Coat_of_arms_of_West_Sumatra.svg.png',
    description:
      'Sumatera Barat adalah sebuah provinsi di Indonesia yang terletak di Pulau Sumatra dengan ibu kota Padang. Provinsi Sumatra Barat terletak sepanjang pesisir barat Sumatra bagian tengah, dataran tinggi Bukit Barisan di sebelah timur, dan sejumlah pulau di lepas pantainya seperti Kepulauan Mentawai. Dari utara ke selatan, provinsi dengan wilayah seluas 42.012,89 km² ini berbatasan dengan empat provinsi, yakni Sumatra Utara, Riau, Jambi, dan Bengkulu.',
  },
  {
    name: 'Riau',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Coat_of_arms_of_Riau.svg/800px-Coat_of_arms_of_Riau.svg.png',
    description:
      'Riau adalah sebuah provinsi di Indonesia yang terletak di bagian tengah pantai timur pulau Sumatra. Wilayah pesisirnya berbatasan dengan Selat Malaka. Hingga tahun 2004, provinsi ini juga meliputi Kepulauan Riau, sekelompok besar pulau-pulau kecil (pulau-pulau utamanya antara lain Pulau Batam dan Pulau Bintan) yang terletak di sebelah Timur Sumatra dan sebelah Selatan Singapura. Kepulauan ini dimekarkan menjadi provinsi tersendiri pada Juli 2004. Ibu kota dan kota terbesar di provinsi Riau adalah Pekanbaru, dan kota besar lainnya setelah Pekanbaru adalah kota Dumai. Berdasarkan hasil Badan Pusat Statistik Riau tahun 2022, penduduk provinsi Riau berjumlah 6.493.603 jiwa, dengan kepadatan penduduk 75 jiwa/km².',
  },
  {
    name: 'Bengkulu',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coat_of_arms_of_Bengkulu.svg/800px-Coat_of_arms_of_Bengkulu.svg.png',
    description:
      'Bengkulu adalah sebuah wilayah provinsi yang berada di Pulau Sumatra, Indonesia. Ibu kota provinsi Bengkulu terletak di kota Bengkulu. Provinsi ini terletak di bagian Barat Daya Pulau Sumatra dan pantai barat di bagian Selatan Pulau Sumatra yang berbatasan langsung dengan provinsi Sumatra Barat, Jambi, Sumatra Selatan dan Lampung di wilayah sekitarnya. Pada tahun 2020, jumlah penduduk provinsi ini sebanyak 2.091.314 jiwa, dengan kepadatan 105 jiwa/km².',
  },
  {
    name: 'Kepulauan Riau',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coat_of_arms_of_Riau_Islands.svg/800px-Coat_of_arms_of_Riau_Islands.svg.png',
    description:
      'Kepulauan Riau adalah sebuah wilayah Provinsi yang terletak di Indonesia. Ibu kota Provinsi Kepulauan Riau ini adalah Kota Tanjungpinang. Provinsi ini berbatasan langsung dengan Vietnam dan Kamboja di sebelah Utara; Malaysia dan provinsi Kalimantan Barat di sebelah Timur; provinsi Kepulauan Bangka Belitung dan Jambi di Selatan; negara Singapura, Malaysia dan provinsi Riau di sebelah Barat. Provinsi ini termasuk provinsi kepulauan di Indonesia. Tahun 2020, penduduk Kepulauan Riau berjumlah 2.064.564 jiwa, dengan kepadatan 252 jiwa/km2, dan 58% penduduknya berada di kota Batam.',
  },
  {
    name: 'Jambi',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Coat_of_arms_of_Jambi.svg/800px-Coat_of_arms_of_Jambi.svg.png',
    description:
      'Jambi adalah sebuah provinsi di Indonesia yang terletak di pesisir timur, di bagian tengah pulau Sumatra, ibu kotanya berada di kota Jambi. Provinsi dengan luas wilayah 50.160,05 km2 ini, pada tahun 2021 memiliki jumlah penduduk 3.548.228 jiwa. Provinsi Jambi adalah nama provinsi di Indonesia yang ibu kotanya memiliki nama sama dengan provinsi selain Bengkulu, Daerah Khusus Ibukota Jakarta, Daerah Istimewa Yogyakarta, dan Gorontalo.',
  },
  {
    name: 'Lampung',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Coat_of_arms_of_Lampung.svg/800px-Coat_of_arms_of_Lampung.svg.png',
    description:
      'Lampung adalah sebuah provinsi di bagian ujung selatan Pulau Sumatra, Indonesia. Ibu kota dan pusat pemerintahannya berada di Kota Bandar Lampung. Provinsi ini memiliki dua kota, yaitu Bandar Lampung dan Metro, serta 13 kabupaten. Posisi provinsi Lampung secara geografis di sebelah barat berbatasan dengan Samudra Hindia, di sebelah timur dengan Laut Jawa, di sebelah utara berbatasan dengan provinsi Sumatra Selatan dan Bengkulu, serta di sebelah selatan berbatasan dengan Selat Sunda.',
  },
  {
    name: 'Bangka Belitung ',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Bangka_Belitung_Islands.svg/800px-Coat_of_arms_of_Bangka_Belitung_Islands.svg.png',
    description:
      'Bangka Belitung adalah sebuah provinsi di Indonesia yang terdiri dari dua pulau utama yaitu Pulau Bangka dan Pulau Belitung serta ratusan pulau-pulau kecil, total pulau yang telah bernama berjumlah 470 buah dan yang berpenghuni hanya 50 pulau. Bangka Belitung terletak di bagian timur Pulau Sumatra, dekat dengan Provinsi Sumatra Selatan. Bangka Belitung dikenal sebagai daerah penghasil timah, memiliki pantai yang indah dan kerukunan antar etnis. Ibu kota provinsi ini ialah Pangkalpinang. Pemerintahan provinsi ini disahkan pada tanggal 9 Februari 2001. Setelah dilantiknya Pj. Gubernur yakni H. Amur Muchasim, SH (mantan Sekjen Depdagri) yang menandai dimulainya aktivitas roda pemerintahan provinsi.',
  },
  {
    name: 'Kalimantan Barat',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Coat_of_arms_of_West_Kalimantan.svg/800px-Coat_of_arms_of_West_Kalimantan.svg.png',
    description:
      'Kalimantan Barat adalah sebuah provinsi di Indonesia, yang berada di pulau Kalimantan, dengan ibu kota atau pusat pemerintahan berada di kota Pontianak. Luas wilayah provinsi Kalimantan Barat adalah 147.307,00 km² (7,53% luas Indonesia). Kalimantan Barat merupakan provinsi terluas keempat di Indonesia setelah Papua, Kalimantan Timur dan Kalimantan Tengah. Pada tahun 2020, penduduk Kalimantan Barat berjumlah 5.414.390 jiwa, dengan kepadatan 37 jiwa/km2.',
  },
  {
    name: 'Kalimantan Timur',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_East_Kalimantan.svg/800px-Coat_of_arms_of_East_Kalimantan.svg.png',
    description:
      'Kalimantan Timur adalah sebuah provinsi Indonesia di Pulau Kalimantan bagian ujung timur yang berbatasan dengan Malaysia, Kalimantan Utara, Kalimantan Tengah, Kalimantan Selatan, Kalimantan Barat, dan Sulawesi. Luas total Kaltim adalah 127.346,92 km² dan populasi sebesar 3.793.152 jiwa (2020). Kalimantan Timur merupakan wilayah dengan kepadatan penduduk terendah ke empat di Nusantara. Ibu kotanya adalah Kota Samarinda.',
  },
  {
    name: 'Kalimantan Selatan',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coat_of_arms_of_South_Kalimantan.svg/800px-Coat_of_arms_of_South_Kalimantan.svg.png',
    description:
      'Kalimantan Selatan adalah salah satu provinsi yang ada di Indonesia yang terletak di pulau Kalimantan. Ibu kota provinsi Kalimantan Selatan adalah Kota Banjarbaru sejak tanggal 16 Maret 2022 menggantikan Kota Banjarmasin. Provinsi ini merupakan rumah etnis Banjar dan memiliki luas 38.744,00 km² dengan populasi ditahun 2020 berjumlah 4.087.894 jiwa, dan wilayah administrasi terbagi menjadi 11 kabupaten dan 2 kota.',
  },
  {
    name: 'Kalimantan Tengah',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_Central_Kalimantan.svg/800px-Coat_of_arms_of_Central_Kalimantan.svg.png',
    description:
      'Kalimantan Tengah adalah salah satu provinsi di Indonesia yang terletak di Pulau Kalimantan. Ibu kotanya adalah Kota Palangka Raya. Berdasarkan sensus tahun 2010, provinsi ini memiliki populasi 2.202.599 jiwa, yang terdiri atas 1.147.878 laki-laki dan 1.054.721 perempuan. Data BPS Kalimantan Tengah tahun 2023 menunjukkan penduduk provinsi ini tahun 2023 bertambah menjadi 2.741.100 (Laki-laki 1.420.900 jiwa dan perempuan 1.320.200 jiwa). Kalimantan Tengah mempunyai 13 kabupaten dan 1 kota.',
  },
  {
    name: 'Kalimantan Utara',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Coat_of_arms_of_North_Kalimantan_%282021_version%29.svg/800px-Coat_of_arms_of_North_Kalimantan_%282021_version%29.svg.png',
    description:
      'Kalimantan Utara adalah sebuah provinsi di Indonesia yang terletak di bagian utara Pulau Kalimantan. Provinsi ini berbatasan langsung dengan negara tetangga Malaysia, yaitu Negara Bagian Sabah dan Sarawak. Pusat pemerintahan Kalimantan Utara saat ini berada di Tanjung Selor, bersama dengan pusat pemerintahan Kabupaten Bulungan.',
  },
  {
    name: 'Banten',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Coat_of_arms_of_Banten.svg/800px-Coat_of_arms_of_Banten.svg.png',
    description:
      'Banten adalah sebuah provinsi di Pulau Jawa, Indonesia. Ibu kota dan pusat pemerintahannya berada di Kota Serang. Provinsi ini merupakan provinsi yang paling barat di Pulau Jawa. Provinsi ini pernah menjadi bagian dari provinsi Jawa Barat, tetapi provinsi ini menjadi wilayah pemekaran sejak tahun 2000, dengan keputusan Undang-Undang Nomor 23 Tahun 2000. Suku aslinya adalah suku Sunda Banten yang berada di wilayah Kabupaten Serang bagian selatan, Kabupaten Pandeglang, Kabupaten Lebak, serta sebagian besar Kabupaten Tangerang, dan komunitas masyarakat adat yakni suku Badui yang mendiami wilayah Gunung Kendeng dan Leuwidamar di Kabupaten Lebak.',
  },
  {
    name: 'DKI Jakarta',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Jakarta.svg/800px-Coat_of_arms_of_Jakarta.svg.png',
    description:
      'DKI Jakarta atau (Daerah Khusus Ibukota Jakarta) adalah ibu kota negara dan kota terbesar di Indonesia. Menurut sistem pembagian administratif Indonesia, Jakarta merupakan provinsi dengan status daerah khusus. Sementara menurut pengertian secara umum, Jakarta merupakan kota metropolitan. Jakarta terletak di pesisir bagian barat laut Pulau Jawa. ',
  },
  {
    name: 'Jawa Barat ',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coat_of_arms_of_West_Java.svg/800px-Coat_of_arms_of_West_Java.svg.png',
    description:
      'Jawa Barat adalah sebuah provinsi di Indonesia. Ibu kota provinsi ini berada di Kota Bandung. Pada tahun 2021 penduduk provinsi Jawa Barat berjumlah 48.782.408 jiwa, dengan kepadatan 1.379 jiwa/km2. Berdasarkan sensus BPS pada tahun 2010, penduduk di Jawa Barat merupakan provinsi dengan penduduk terbanyak pertama di Indonesia, penduduk aslinya merupakan suku Sunda.',
  },
  {
    name: 'Jawa Tengah',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_Central_Java.svg/800px-Coat_of_arms_of_Central_Java.svg.png',
    description:
      'Jawa Tengah adalah sebuah wilayah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa. Ibu kotanya adalah Kota Semarang. Provinsi ini berbatasan dengan Provinsi Jawa Barat di sebelah barat, Samudra Hindia dan Provinsi Daerah Istimewa Yogyakarta di sebelah selatan, Provinsi Jawa Timur di sebelah timur, dan Laut Jawa di sebelah utara. Luas wilayahnya 32.800,69 km², atau sekitar 28,94% dari luas pulau Jawa. Provinsi Jawa Tengah juga meliputi Pulau Nusakambangan di sebelah selatan (dekat dengan perbatasan Jawa Barat), serta Kepulauan Karimun Jawa di Laut Jawa. Penduduk Jawa Tengah berdasarkan Badan Pusat Statistik tahun 2021 berjumlah 36.516.035 jiwa dengan kepadatan 1.113,00 jiwa/km².',
  },
  {
    name: 'Daerah Istimewa Yogyakarta',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Coat_of_arms_of_Yogyakarta.svg/800px-Coat_of_arms_of_Yogyakarta.svg.png',
    description:
      'Daerah Istimewa Yogyakarta adalah Daerah Istimewa setingkat provinsi di Indonesia yang merupakan peleburan dari Negara Kesultanan Yogyakarta dan Negara Kadipaten Paku Alaman. Daerah Istimewa Yogyakarta terletak di bagian selatan Pulau Jawa, dan berbatasan dengan Provinsi Jawa Tengah dan Samudra Hindia. Daerah Istimewa yang memiliki luas 3.185,80 km2 ini terdiri atas satu kota, dan empat kabupaten, yang terbagi lagi menjadi 78 kapanewon/kemantren, dan 438 kalurahan/kelurahan. Menurut sensus penduduk 2010 memiliki populasi 3.452.390 jiwa dengan proporsi 1.705.404 laki-laki, dan 1.746.986 perempuan, serta memiliki kepadatan penduduk sebesar 1.084 jiwa per km2.',
  },
  {
    name: 'Jawa Timur',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_arms_of_East_Java.svg/800px-Coat_of_arms_of_East_Java.svg.png',
    description:
      'Jawa Timur adalah sebuah wilayah provinsi yang terletak di bagian timur Pulau Jawa, Indonesia. Ibu kotanya adalah Kota Surabaya. Luas wilayahnya yakni 48.033 km², dengan jumlah penduduk sebanyak 41.144.067 jiwa (tahun 2022) dan kepadatan penduduk 857 jiwa/km2. Hampir seperempat dari jumlah penduduk Jawa Timur bermukim di wilayah metropolitan Surabaya.',
  },
  {
    name: 'Bali',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Coat_of_arms_of_Bali.svg/1024px-Coat_of_arms_of_Bali.svg.png',
    description:
      'Bali adalah sebuah wilayah provinsi yang terletak di Indonesia. Ibu kotanya adalah Denpasar. Provinsi Bali terletak di bagian barat Kepulauan Nusa Tenggara. Di awal kemerdekaan Indonesia, pulau ini termasuk dalam Provinsi Sunda Kecil yang beribu kota di Singaraja, dan kini terbagi menjadi 3 provinsi, yakni Bali, Nusa Tenggara Barat, dan Nusa Tenggara Timur . Pada tahun 2020, penduduk provinsi Bali berjumlah 4.317.404 jiwa, dengan kepadatan 747 jiwa/km2.',
  },
  {
    name: 'Nusa Tenggara Timur',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/800px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png',
    description:
      'Nusa Tenggara Timur adalah sebuah provinsi di Indonesia yang meliputi bagian timur Kepulauan Nusa Tenggara. Provinsi ini memiliki ibu kota di Kota Kupang dan memiliki 22 kabupaten/kota. Provinsi ini berada di Kepulauan Sunda Kecil. Tahun 2022, penduduk provinsi ini berjumlah 5.446.285 jiwa, dengan kepadatan 114 jiwa/km2.',
  },
  {
    name: 'Nusa Tenggara Barat',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Coat_of_arms_of_West_Nusa_Tenggara.svg/800px-Coat_of_arms_of_West_Nusa_Tenggara.svg.png',
    description:
      'Nusa Tenggara Barat ialah sebuah provinsi di Indonesia yang berada di bagian tengah Kepulauan Nusa Tenggara di antara provinsi Bali di sebelah barat dan provinsi Nusa Tenggara Timur di sebelah Timur. Pusat pemerintahan dan ibu kota provinsi ini berada di Kota Mataram. Nusa Tenggara Barat memiliki 8 Kabupaten dan 2 Kota, termasuk kota Mataram. Pada tahun 2020, penduduk Nusa Tenggara Barat berjumlah 5.320.092 jiwa, dengan kepadatan 264 jiwa/km2.',
  },
  {
    name: 'Gorontalo',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coat_of_arms_of_Gorontalo.svg/800px-Coat_of_arms_of_Gorontalo.svg.png',
    description:
      'Gorontalo adalah sebuah Provinsi di Indonesia yang terletak di bagian utara Pulau Sulawesi. Provinsi Gorontalo kemudian lahir pada tanggal 5 Desember 2000 berdasarkan Undang-Undang Nomor 38 tahun 2000. Kota Gorontalo kemudian ditetapkan sebagai ibukota Provinsi Gorontalo, sekaligus menjadi pusat pemerintahan, pusat ekonomi dan perdagangan terbesar di Kawasan Teluk Tomini. Adapun jumlah penduduk Provinsi Gorontalo sebanyak 1.171.681 jiwa (Sensus BPS, 2020), dengan laju pertumbuhan penduduk sebesar 1.16% setiap tahunnya.',
  },
  {
    name: 'Sulawesi Barat',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Coat_of_arms_of_West_Sulawesi.svg/800px-Coat_of_arms_of_West_Sulawesi.svg.png',
    description:
      'Sulawesi Barat adalah sebuah provinsi di Indonesia yang terletak di bagian barat Pulau Sulawesi, Indonesia. Daerah ini pernah menjadi bagian dari provinsi Sulawesi Selatan hingga pemekaran provinsi pada 2004. Ibukota provinsi Sulawesi Barat adalah Kabupaten Mamuju. Pembentukan provinsi Sulawesi Barat merupakan hasil pemekaran dari provinsi Sulawesi Selatan yang didasarkan pada Undang-Undang Nomor 26 Tahun 2004 yang disahkan dalam rapat Paripurna antara Pemerintah dan DPR RI, dan diresmikan oleh Menteri Dalam Negeri atas nama Presiden Republik Indonesia pada tanggal 16 Oktober 2004. Sulawesi Barat memiliki daratan dengan luas 16.937, 16 km2 dan lautan dengan luas 20.342 km2 serta pesisir pantai sepanjang 677 km. Jumlah kecamatan di Sulawesi barat sebanyak 69 dengan jumlah desa/kelurahan sebanyak 649.',
  },
  {
    name: 'Sulawesi Tengah',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Coat_of_arms_of_Central_Sulawesi.svg/800px-Coat_of_arms_of_Central_Sulawesi.svg.png',
    description:
      'Sulawesi Tengah adalah sebuah provinsi di bagian tengah Pulau Sulawesi, Indonesia. Ibu kota provinsi ini adalah Kota Palu. Luas wilayahnya 61.841,29 km², dan jumlah penduduk sebanyak 3.021.879 jiwa (2021). Sulawesi Tengah memiliki wilayah terluas di antara semua provinsi di Pulau Sulawesi, dan memiliki jumlah penduduk terbanyak kedua di Pulau Sulawesi setelah provinsi Sulawesi Selatan.',
  },
  {
    name: 'Sulawesi Utara',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Coat_of_arms_of_North_Sulawesi.svg/1024px-Coat_of_arms_of_North_Sulawesi.svg.png',
    description:
      'Sulawesi Utara adalah salah satu provinsi yang terletak di ujung utara Pulau Sulawesi, Indonesia, dengan ibu kota terletak di kota Manado. Sulawesi Utara atau Sulut berbatasan dengan Laut Maluku dan Samudera Pasifik di sebelah timur, Laut Maluku dan Teluk Tomini di sebelah selatan, Laut Sulawesi dan Provinsi Gorontalo di sebelah barat, dan Provinsi Davao Occidental di sebelah utara. Penduduk Sulawesi Utara pada tahun 2021 berjumlah 2.655.970 jiwa, dan luas wilayahnya adalah 13.892,47 km2.',
  },
  {
    name: 'Sulawesi Tenggara',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Coat_of_arms_of_Southeast_Sulawesi.svg/1024px-Coat_of_arms_of_Southeast_Sulawesi.svg.png',
    description:
      'Sulawesi Tenggara adalah sebuah provinsi di Indonesia yang terletak bagian tenggara pulau Sulawesi dengan ibu kota Kendari. Provinsi Sulawesi Tenggara terletak di Jazirah Tenggara Pulau Sulawesi, Sulawesi Tenggara awalnya merupakan nama salah satu kabupaten di Provinsi Sulawesi Selatan dan Tenggara (Sulselra) dengan Kecamatan Baubau sebagai ibu kota kabupaten. Sulawesi Tenggara ditetapkan sebagai Daerah Otonom berdasarkan Perpu No. 2 tahun 1964 Juncto UU No.13 Tahun 1964.',
  },
  {
    name: 'Sulawesi Selatan',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Coat_of_arms_of_South_Sulawesi.svg/800px-Coat_of_arms_of_South_Sulawesi.svg.png',
    description:
      'Sulawesi Selatan adalah sebuah provinsi di semenanjung selatan Sulawesi. Kepulauan Kepulauan Selayar di selatan Sulawesi juga merupakan bagian dari provinsi tersebut. Ibu kota provinsi ini berada di Kota Makassar. Provinsi ini berbatasan dengan Sulawesi Tengah dan Sulawesi Barat di utara, Teluk Bone dan Sulawesi Tenggara di timur, Selat Makassar di barat, dan Laut Flores di selatan.',
  },
  {
    name: 'Maluku Utara',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Coat_of_arms_of_North_Maluku.svg/800px-Coat_of_arms_of_North_Maluku.svg.png',
    description:
      'Maluku Utara merupakan provinsi bagian Timur Indonesia yang resmi terbentuk pada 4 Oktober 1999 yang sebelumnya menjadi kabupaten dari provinsi Maluku bersama dengan Halmahera Tengah, berdasarkan UU RI Nomor 46 Tahun 1999 dan UU RI Nomor Tahun 2003. Jumlah penduduk Maluku Utara pada tahun 2021 mencapai 1.316.973 jiwa, dengan kepadatan penduduk sebanyak 41 jiwa/km2.',
  },
  {
    name: 'Papua Barat',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_West_Papua.svg/800px-Coat_of_arms_of_West_Papua.svg.png',
    description:
      'Papua Barat adalah sebuah provinsi Indonesia yang terletak di ujung barat Pulau Papua. Wilayah Papua Barat mencakup Semenanjung Bomberai dan Wandamen. Ibukota provinsi ini terletak di Manokwari. Provinsi ini dimekarkan dari Provinsi Papua melalui Undang-Undang Nomor 45 Tahun 1999.',
  },
  {
    name: 'Papua',
    fanArt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Coat_of_arms_of_Papua_2.svg/800px-Coat_of_arms_of_Papua_2.svg.png',
    description:
      'Papua adalah provinsi yang terletak di pesisir utara Papua, Indonesia, yang berdiri sejak 1 Mei 1963. Provinsi Papua sebelumnya bernama Irian Barat dan Irian Jaya yang mencakup seluruh Tanah Papua bekas Karesidenan Nugini Barat. Ibu kota Papua berada di Kota Jayapura, yang berbatasan langsung dengan negara Papua Nugini. Sejak 30 Juni 2022, provinsi Papua dimekarkan, yang membentuk provinsi baru yakni, Papua Tengah, Papua Pegunungan, serta Papua Selatan.',
  },
];
export default provs;
