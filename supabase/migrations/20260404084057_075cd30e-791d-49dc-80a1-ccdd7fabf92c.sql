UPDATE site_content SET content = '{
  "heading": "Educational Background",
  "subheading": "A journey through academics — from foundational science to specialized agriculture.",
  "items": [
    {
      "step": "01",
      "year": "2019–2025",
      "title": "B.Sc. (Honours) in Agriculture",
      "subtitle": "Gopalganj Science & Technology University",
      "badge": "CGPA 3.59 / 4.00",
      "description": "Comprehensive study in crop science, soil management, plant pathology, and agricultural economics. Engaged in multiple research projects on sustainable farming practices and modern agri-tech integration.",
      "imageUrl": "",
      "imageKey": "university"
    },
    {
      "step": "02",
      "year": "2019",
      "title": "HSC — Science",
      "subtitle": "Notre Dame College, Mymensingh",
      "badge": "GPA 4.25 / 5.00",
      "description": "Focused on Biology, Chemistry, Physics and Mathematics with strong academic performance. Built a solid scientific foundation that paved the way for university-level agricultural studies.",
      "imageUrl": "",
      "imageKey": "college"
    },
    {
      "step": "03",
      "year": "2016",
      "title": "SSC — Science",
      "subtitle": "Suti V.M. Pilot Model High School",
      "badge": "GPA 5.00 / 5.00",
      "description": "Achieved perfect GPA in the Secondary School Certificate examination. Active participant in science fairs and debating competitions, laying the groundwork for future academic excellence.",
      "imageUrl": "",
      "imageKey": "highschool"
    }
  ]
}'::jsonb, updated_at = now() WHERE section_key = 'education';