<script setup>
import Navigation from "../components/Navigation.vue";
import Title from "../components/Title.vue";
import Paragraph from "../components/Paragraph.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import {ref} from "vue";
import UploadedFileInfo from "../components/UploadedFileInfo.vue";
import { useToast } from "vue-toastification";
import axios from "axios";
import { CirclesToRhombusesSpinner } from 'epic-spinners'

const files = ref([]);
const content = ref();
const toast = useToast();
const isLoading = ref(false);
const isDisabled = ref(true);
const isExamGenerated = ref(false);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file.type === 'application/pdf') {
    files.value.push(file);
    isDisabled.value = files.value.length <= 0;
    console.log(typeof files.value);
  }else {
    toast.error("Only PDF file is allowed.", {
      timeout: 2000
    });
  }
};
const generateExam = async () => {
  const formData = new FormData();
  files.value.forEach((file) => {
    formData.append(`pdfFiles`, file);
  })
  isLoading.value = true;
  await axios.post('/api/api/file/extract-text', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(async result => {
        content.value = result.data;
        const body = {
          topic: content.value
        }
        await axios.post('/api/api/openai/test', body, {
          'Content-Type': 'application/json'
        }).then(result => {
          console.log(result);
          window.localStorage.setItem('examData', JSON.stringify(result.data));
          isLoading.value = false;
          content.value = null;
          isDisabled.value = true;
          isExamGenerated.value = true;
          files.value = [];
          toast.success("Your file is ready for download.", {
            timeout: 5000
          });
        }).catch(err => {
          console.log(err);
          toast.error("Internal Service Error", {
            timeout: 2000
          });
        })

      })
      .catch(err => {
        console.log(err)
        isLoading.value = false;
      });

  isLoading.value = false;
}

const proceedToExam= () => {
  window.location.href =' http://localhost:3000/exam';
}
const getMegaBytesSize = (bytes) => {
  return parseFloat((bytes / (1024 * 1024)).toFixed(2));
}
const removeFile = (index) => {
 files.value.splice(index, 1);
  isDisabled.value = files.value.length <= 0;
}

</script>

<template>
  <div class="flex flex-col p-8 min-h-screen">
    <Navigation/>
    <section class="flex-1 flex flex-col items-center justify-center h-full w-full">
      <div class="flex flex-col gap-4 p-5 min-h-96 md:w-96 bg-primary border border-black rounded-lg shadow-thick shadow-dark-orange w-72">
        <section>
          <Title class="text-lg" title="Upload a PDF file"/>
          <Paragraph>Upload a pdf file to get started.</Paragraph>
        </section>
        <section class="flex-1 h-auto space-y-2">
          <div class="relative flex gap-2 items-center justify-center border border-dashed rounded-lg h-24 w-full" :class="isExamGenerated ? 'border-2 bg-secondary shadow-secondary' : ''">
            <input :disabled="isExamGenerated" @change="handleFileUpload" name="files" type="file"  class="absolute inset-0 opacity-0 h-full w-full cursor-pointer">
            <img src="../assets/file-upload.svg" alt="file upload" class="h-10">
            <span class="underline">{{ isExamGenerated ? 'Your Exam is Ready!' : 'Click to upload file'}}</span>
          </div>
            <UploadedFileInfo v-for="(file, index) in files"
                              :key="index"
                              :fileName="file.name"
                              :mega-bytes="getMegaBytesSize(file.size).toString()"
                              @some-event="removeFile(index)"
            />
        </section>
        <PrimaryButton v-show="!isLoading && !isExamGenerated" :disabled="isDisabled" :class="{ 'border-gray/50 text-gray/50 transition-none hover:bg-opacity-0' : isDisabled}" @click="generateExam()" class="self-end" title="Generate an Exam"/>
        <PrimaryButton v-show="isLoading && !isExamGenerated" :disabled="isDisabled" :class="{ 'border-gray/50 text-gray/50 transition-none hover:bg-opacity-0' : isDisabled}" class="self-end">
          <circles-to-rhombuses-spinner
              :animation-duration="1200"
              :circles-num="3"
              :circle-size="10"
              color="#FF8D4D"
          />
        </PrimaryButton>
        <PrimaryButton v-show="isExamGenerated"  @click="proceedToExam()" class="bg-secondary self-end" title="Proceed to Exam"/>
      </div>
    </section>
  </div>
</template>

