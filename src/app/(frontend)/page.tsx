import React from 'react';
import './globals.css';
// import { getPayloadClient } from '@/lib/get-payload'; // Giả sử bạn đã cấu hình Payload CMS
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

export default async function HomePage() {
  // const payload = await getPayloadClient();
  // Truy vấn global config 'main-menu'
  // const menuData = await payload.findGlobal({
  //   slug: 'main-menu',
  // });

  return (
    <div className="home">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Render menu_items ở đây */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}